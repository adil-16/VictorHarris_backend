const otpGenerator = require("otp-generator");

export function generateOTP() {
  let OTP = otpGenerator.generate(6, {
    upperCase: false,
    specialChars: false,
    alphabets: false,
  });
  return OTP;
}
