import express from 'express';
import fetch from 'node-fetch';

const app = express();


app.get("/*", (req, res) => {
		fetch("https://raw.githubusercontent.com/AlessandroLudovici/Appunti-2-superiori/main/fisica/"+req.originalUrl).then((res) => res.text()).then((appunto) => res.send(`

<!DOCTYPE html>
<html lang="en">
<title>Notes on Euler's Identity</title>
<script src="https://cdn.jsdelivr.net/npm/texme@1.0.0"></script>
<textarea>

${appunto}

</textarea>
				`))
})

app.listen(10000, () => {
		console.log("Ascolto su http://localhost:10000")
})


