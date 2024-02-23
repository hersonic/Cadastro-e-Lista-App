//React-Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//styles.css
import { Title, UserForm, Container, Layout } from "./styles";

//yup
import { object, string } from "yup";

//Regex para validar telefone e nome completo
import {
	PHONE_VALIDATOR,
	FULL_NAME_VALIDATOR
} from "./InputValidator";


export default function App() {
	const schema = object({
		Name: string()
			.required("Nome é obrigatório")
			.matches(FULL_NAME_VALIDATOR, "Nome inválido")
			.min(3, "Nome deve ter no mínimo 3 caracteres"),
		Andress: string()
			.required("Endereço é obrigatório")
			.min(3, "Endereço deve ter no mínimo 3 caracteres"),
		Phone: string()
			.required("Telefone é obrigatório")
			.min(9, "Telefone deve ter no mínimo 9 numeros")
			.matches(PHONE_VALIDATOR, "Telefone inválido")
			.typeError("Telefone deve ser um número"),
		Mailing: string()
			.required("E-mail é obrigatório")
			.email("E-mail inválido")
			.min(6, "E-mail deve ter no mínimo 6 caracteres")
	}).required();
	const {
		register,
		handleSubmit: onSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const handleSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<Layout>
			<Title>
				<h1>Cadastro de Clientes</h1>
			</Title>

			<Container>
				<UserForm>
					<form onSubmit={onSubmit(handleSubmit)}>
						<label>
							Nome:
							<input {...register("Name")}/>
							<span>{errors?.Name?.message}</span>
						</label>
						<label>
							Endereço:
							<input {...register("Andress")} />
							<span>{errors?.Andress?.message}</span>
						</label>
						<label>
							Telefone:
							<input {...register("Phone")} />
							<span>{errors?.Phone?.message}</span>
						</label>
						<label>
							E-mail:
							<input {...register("Mailing")} />
							<span>{errors?.Mailing?.message}</span>
						</label>
						<div>
							<button
								type="submit"
								style={{
									width: "100%",
									padding: "10px",
									cursor: "pointer",
									backgroundColor: "green",
									color: "white",
									border: "none",
									borderRadius: "5px",
								}}
							>
								Enviar
							</button>
						</div>
					</form>
				</UserForm>
			</Container>
		</Layout>
	);
}