import React, {useEffect, useState} from 'react';
import {Button, Stack, styled, Typography, Modal} from "@mui/material";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import './app.css'
const App = () => {
    const [isChooseGift, setIsChooseGift] = useState(false);
    const [giftValues, setGiftValues] = useState([]);
    const [revealedGift, setRevealedGift] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [money, setMoney] = useState()

    useEffect(() => {
        const gifts = ['300k', '400k', '500k', '500k'];
        const shuffledGifts = shuffle(gifts);
        setGiftValues(shuffledGifts);
    }, []);

    const handleChooseGift = () => {
        setIsChooseGift(true);
    };

    const handleOpenGift = (index) => {
        const updatedRevealedGift = [...revealedGift];
        updatedRevealedGift[index] = true;
        setRevealedGift(updatedRevealedGift);
    };

    // Hàm xáo trộn mảng
    const shuffle = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    return (
        <Stack position={'fixed'} width={'100%'} height={'100vh'} alignItems={'center'} justifyContent={'center'}>
            <Stack position={'absolute'} top={'200px'}>
                <Typography fontSize={'20px'} color={'#F08080'} fontWeight={500}>
                    CHÚC MỪNG NĂM MỚI BABE
                </Typography>
            </Stack>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
            <Stack height={'100%'} justifyContent={'space-around'} width={'100%'} alignItems={'center'}>
                <Stack />
                {!isChooseGift ? (
                    <Button onClick={handleChooseGift} style={{ background: '#fff', width: '200px', height: '70px', borderRadius: '20px', padding: '20px' }}>
                        <Typography fontSize={'16px'} mr={'10px'}>
                            Mở quà nào babe
                        </Typography>
                        <CardGiftcardIcon fontSize={'large'} />
                    </Button>
                ) : (
                    <Stack flexDirection={'row'} flexWrap={'wrap'} gap={1} width={'100%'} alignItems={'center'} justifyContent={'center'}>
                        {giftValues.map((value, index) => (
                            <ButtonGift key={index} onClick={() => {
                                handleOpenGift(index)
                                setMoney(value)
                                setTimeout(() => {
                                    setShowModal(true)
                                },500)
                            }} revealed={revealedGift[index]}>
                                {revealedGift[index] ? `${value}` : <CardGiftcardIcon fontSize={'large'} />}
                            </ButtonGift>
                        ))}
                    </Stack>
                )}
            </Stack>
            <Modal  open={showModal} onClose={() => {
                setShowModal(false)
                setIsChooseGift(false)
                setRevealedGift([])
            }}
            >
                    <Stack sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',  bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, width: 300 }} alignItems={'center'}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Chúc mừng năm mới
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} textAlign={'center'} whiteSpace={'pre-line'}>
                            {`Chúc bạn sữa và gia đình luôn luôn mạnh khoẻ hạnh phúc và thật nhiều niểm vui nhé. Hi vọng chúng ta có thể ở bên thật nhiều nhiều cái tết nữa.
 Yêu em nhiều nhiều 
 à à chúc mừng em vì đã trúng thưởng ${money}`}
                        </Typography>
                    </Stack>
            </Modal>
        </Stack>
    );
};
export default App;

const ButtonGift = styled(Button)(({ revealed }) => ({
    height: 60,
    width: 'calc((100% - 40px)/2)',
    background: revealed ? '#e0e0e0' : '#ffcc80',
    maxWidth: '300px'
}));