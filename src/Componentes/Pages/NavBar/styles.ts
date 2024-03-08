import {styled, Box} from '@mui/system';

export const Container = styled(Box)`
	background-color: #f0f0f0;
    width: 100%;
    padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

export const Nav = styled(Box)`
    display: flex;
    gap: 20px;
    a {
        text-decoration: none;
        color: #000;
        font-size: 20px;
    }
    a.active:hover {
        color: red;
    }
`;