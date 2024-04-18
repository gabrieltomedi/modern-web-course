export default function handler (req, res) {
    const code = req.query.code
    res.status(200).json({
        id: req.query.code,
        name: `Marcus ${code}`,
        email: `teste${code}@test.com`

    })
}