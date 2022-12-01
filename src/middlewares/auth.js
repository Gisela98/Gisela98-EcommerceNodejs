const auth = (req, res, next) => {
	try {
		
		const token = req.headers['authorization'];

		if(!token) throw new Error('Token header is missing');

		next();

	} catch (error) {
		res.json(error.message);
	}
}