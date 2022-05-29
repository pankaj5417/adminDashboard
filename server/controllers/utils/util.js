const fast2sms = require("fast-two-sms");

exports.fast2sms = async ({ message, phone }, next) => {
  try {
    const res = await fast2sms.sendMessage({
      authorization: 'ylgFLPrH78ZSXuQ092OzVpAiB6NnYTGDI4homvC3a1RjUcdsEwPf0RXMV6BjIYEixpK2SaU1ybwGznWC',
      message,
      numbers: [phone],
    });
    console.log(res);
  } catch (error) {
    next(error);
  }
};
