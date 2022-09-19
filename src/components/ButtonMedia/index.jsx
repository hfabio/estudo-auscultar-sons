import { Image } from './styles';

export const Button = ({ Src, Alt, OnClick }) => <Image src={Src} alt={Alt ?? ''} onClick={OnClick} />;

export default Button;
