import {styled, Box} from '@mui/system';

export const Header = styled(Box)`
    background-color: #f0f0f0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 50px;
    position: fixed;
    border-bottom: 1px solid #000;
    top: 0;
    z-index: 100;
    box-shadow: 0px 0px 10px 0px #000;
`;

export const Container = styled(Box)`
	background-color: #f0f0f0;
    width: 100%;
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