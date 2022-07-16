import * as cryptoUtils from "../src/cryptoUtils";

describe('Crypto Utils', () => {
    test("Encrypt and Decrypt message", async () => {
        const message = {
            value: "This is a secret message",
            sent: new Date()
        }
        const encryptedMessage = await (cryptoUtils as any).encrypt(message);
        const decryptMessage = await (cryptoUtils as any).decrypt(message);

        expect(message).not.toEqual(encryptedMessage);
        expect(message).toEqual(decryptMessage);
    })

    test("Encrypt and Decrypt fake message", async () => {
        const fakeEncryption = ";sdufauilgfhjalfgbnsfhjdbgjlshbn";
        await expect(async () => await (cryptoUtils as any).decrypt(fakeEncryption)).rejects.toThrowError("Not valid");
    })

    test("Sign message", async () => {
        const message = {
            value: "This is a secret message",
            sent: new Date()
        }
        const signedMessage = await (cryptoUtils as any).sign(message);
        expect(signedMessage.signature).toBeDefined();
        expect(signedMessage.payload).toEqual(message);
        const isValid = await (cryptoUtils as any).validateSignature(signedMessage);
        expect(isValid).toBe(true);
    })

    test("Validate fake message", async () => {
        const fakeSignedMessage = {
            signature: "asdasdasdsdfkjfhjknvbcbhnvbjnbcvnmv",
            payload: {
                value: "This is a secret message",
                sent: new Date()
            }
        }

        const isValid = await (cryptoUtils as any).validateSignature(fakeSignedMessage);
        expect(isValid).toBe(false);
    })
})
