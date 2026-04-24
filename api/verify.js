export default function handler(req, res) {
  const { code } = req.body;

  const validCodes = ["1234", "abcd"];

  if (validCodes.includes(code)) {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
}
