export default function handler(req, res) {
  const { code } = req.body;

  // 👇 THIS is where you see what users type
  console.log("User entered code:", code);

  const validCodes = ["1234567890123456"];

  if (validCodes.includes(code)) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(200).json({ success: false });
  }
}
