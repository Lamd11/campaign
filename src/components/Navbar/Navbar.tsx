import React from 'react';
import { MenuButton } from './MenuButton';
import Button from '@mui/material/Button'
import AnimatedText from './AnimatedText';

const Navbar = () => {
    const [isOpen, setOpen] = React.useState(false);

    const menuButtonStyle = {
        marginLeft: "2rem"
    };

    return (
        <nav className="fixed top-0 z-50 mx-auto mt-2 h-20 w-[90%] rounded-xl bg-white-custom bg-opacity-70 backdrop-blur-sm">
            <div className="mx-auto flex flex-wrap items-center justify-between p-4">
                <MenuButton
                    isOpen={isOpen}
                    onClick={() => setOpen(!isOpen)}
                    strokeWidth="4"
                    color="#3399cc"
                    transition={{ ease: "easeOut", duration: 0.2 }}
                    width="64"
                    height="24"
                    style={menuButtonStyle}
                />
                <AnimatedText />
                <Button
                    variant="contained"
                    size="large"
                    style={{
                        backgroundColor: "#0A21C0", // Blue-custom
                        color: "#F0F1FA", // Off-white
                        padding: "12px 36px",
                        fontWeight: "bold",
                        fontSize: "18px",
                        borderRadius: "30px",
                    }}
                >
                    VOTE NOW
                </Button>
            </div>
        </nav>
    )
}

export default Navbar;
