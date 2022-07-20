
import {mnemonicToEntropy } from 'bip39'

const _sodium = require('libsodium-wrappers');

import {crypto_sign, crypto_sign_open, crypto_sign_ed25519_pk_to_curve25519, crypto_box_seal, crypto_box_seal_open, crypto_sign_ed25519_sk_to_curve25519 } from "libsodium-wrappers";

const mnemonic = 'feed fiber elegant trumpet inner remove lucky toe away page actual august fence cycle skill whip unfold sheriff true payment affair hospital blind mountain'


const createKeyPair = async () => {
    await _sodium.ready;
    const sodium = _sodium;

    const entropy = mnemonicToEntropy(mnemonic);
    const encodedEntropy = Uint8Array.from(Buffer.from(entropy, 'hex'));

    return sodium.crypto_sign_seed_keypair(encodedEntropy);
}

export async function encrypt(message: Object)  {
    const messageAsString = JSON.stringify(message)
    const kp = await createKeyPair();
    const encryptionKey: Uint8Array = crypto_sign_ed25519_pk_to_curve25519(kp.publicKey);

    return crypto_box_seal(messageAsString, encryptionKey, 'uint8array')
}

export const base64 = {
    decode: (s: any) => Uint8Array.from(atob(s), c => c.charCodeAt(0)),
    encode: (b: any) => btoa(String.fromCharCode(...new Uint8Array(b))),
};


export async function decrypt(encryptedMessage: Uint8Array) {
    const kp = await createKeyPair();

    const encryptionKey: Uint8Array = crypto_sign_ed25519_pk_to_curve25519(kp.publicKey);
    const decryptionKey: Uint8Array = crypto_sign_ed25519_sk_to_curve25519(kp.privateKey);

    try {
        const decryptedMessage = crypto_box_seal_open(encryptedMessage, encryptionKey,  decryptionKey)

        return  JSON.parse(new TextDecoder().decode(decryptedMessage));
    }

    catch(e) {
        throw Error("Not valid")
    }
}


export async function sign(message: Object) {
    const messageAsString = JSON.stringify(message);
    const kp = await createKeyPair();

    const signedMessage = crypto_sign(messageAsString, kp.privateKey)

    return {
        signature: base64.encode(signedMessage),
        payload: message
    }
}


export async function validateSignature(message: Object) {
    const signature = message['signature']


    const kp = await createKeyPair();

    try {
        const signedMessage = crypto_sign_open(base64.decode(signature), kp.publicKey)
        return true;
    }

    catch(e) {
        return false;
    }
}
