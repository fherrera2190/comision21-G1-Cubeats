const $ = (id) => document.getElementById(id);

const expresiones = {
	firs_name: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']{5,50}$/,
	last_name: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']{5,50}$/,
	description:
		/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9\s\.,!?¿¡@#$%^&*()_+-=<>;:'"[\]{}|\\/]{20,500}$/,
};
const validFormatImage = ["image/png", "image/jpg", "image/jpeg"];
window.addEventListener("load", function () {
	const image = document.getElementById("image");
	const divError = document.getElementById("divError");
	image.addEventListener("input", previewImage);

	$("formUpdateProfile").addEventListener("submit", function (e) {
		e.preventDefault();
		const expFirstName = expresiones.firs_name.test($("first_name").value);
		const expLastName = expresiones.last_name.test($("last_name").value);
		const expDescription = expresiones.description.test($("description").value);
		const inputError = document.getElementById("input-error");
		let expImage = false;

		inputError.innerHTML = "";

		if (
			image.files &&
			image.files[0] &&
			!validFormatImage.includes(image.files[0].type)
		) {
			expImage = true;
		}

		if (expFirstName && expLastName && expDescription && !expImage) {
			this.submit();
		} else {
			divError.classList.remove("hidden");
			divError.classList.add("flex");

			if (!expFirstName)
				inputError.innerHTML += `<p>Debe ingresar un nuevo nombre valido.</p>`;
			if (!expLastName)
				inputError.innerHTML += `<p>Debe ingresar un nuevo Apellido valido.</p>`;
			if (!expDescription)
				inputError.innerHTML += `<p>Debe ingresar una nueva descripción valida.</p>`;
			if (expImage)
				inputError.innerHTML += `<p>Debe ingresar un formato valido de imagen JPG, JPEG,PNG.`;
		}
	});
});

function previewImage() {
	const input = document.getElementById("image");
	const preview = document.getElementById("previewImage");

	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			preview.src = e.target.result;
		};
		// console.log( input.files[0].type)
		reader.readAsDataURL(input.files[0]);
	}
}