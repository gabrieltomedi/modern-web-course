export default function handler (req, res) {
    const code = req.query.codes
    res.status(200).json({
        id: req.query.codes,
        name: `Marcus ${code}`,
        email: `teste${code}@test.com`

    })
}