import { styled, Box } from '@mui/system';

export const Title = styled('div')`
    h1 {
        text-align: center;
        color: #000;
        margin-bottom: 50px;
    }
    `;

export const UserForm = styled(Box)`
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		label {
			display: flex;
			flex-direction: column;
			gap: 5px;
			input {
				padding: 10px;
				border: 1px solid #000;
				border-radius: 5px;
			}
		}
	}
`;

export const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
    width: 50%;
    margin: 0 auto;
    `;

export const Layout = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;