const { createHmac } = await import('crypto');

export const getDbId = (secretId) => {
    const secret = secretId;
    const hash = createHmac('sha256', secret)
                    .update(Date.now().toString())
                    .digest('hex');
    return hash
}


