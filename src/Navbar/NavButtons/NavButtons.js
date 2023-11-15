import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


    const CustomButton = styled(Button)({
        color:'var(--navButton)',
        padding:'0 1.5vw'
    })


    function NavButtons(prop){
        return (
            <CustomButton data-cursor="-opaque" size="large" onClick={()=>prop.onClick(prop.name)}>{prop.name}</CustomButton>
        )
    }

    export default NavButtons;