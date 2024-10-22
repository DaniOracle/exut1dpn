import React, { useState } from 'react';
import '../App.css'
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";

function Noticia({ id, avatar, title, date, imageUrl, subTitle, text, imageDescription, likes }) {

    const [liked, setLiked] = useState(false);
    const [count = likes, setCount] = useState(likes)

    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => {

        setOpenDialog(true);

    }


    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleSubmitWhatsApp = () => {
        console.log('Enviando por WhatsApp');
        setOpen(false)
    };
    const handleSubmitTelegram = () => {
        console.log('Enviando por Telegram');
        setOpen(false)
    };

    const handleLike = () => {
        setLiked(!liked);

    };
    return (
        <>
            <Card sx={{ maxWidth: 1200, mt: 8, mb: 8 }}>

                <CardActionArea>
                    <Box>

                        <CardContent>
                            {<Avatar src={avatar} />}
                            <Typography gutterBottom variant="h5">
                                {title}
                            </Typography>
                            <Typography gutterBottom variant="h7">
                                {subTitle}
                            </Typography>
                        </CardContent>
                    </Box>

                    <CardMedia
                        component="img"
                        height="194"
                        image={imageUrl}
                        alt={imageDescription}
                    />
                    <CardContent>

                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "justify" }}>
                            {text}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Box sx={{ display: 'inline' }}>
                        <Typography gutterBottom variant="h7">
                        </Typography>
                        <IconButton onClick={handleLike} aria-label="me gusta">
                            {count}
                            {liked === true ? <FavoriteIcon sx={{color: "red"}} onClick={() => setCount((count) => count -1)}/> : <FavoriteBorderIcon sx={{color: "red"}} onClick={() => setCount((count) => count +1)}/>}

                        </IconButton>
                        <ShareIcon onClick={handleClickOpen}>

                        </ShareIcon>
                    </Box>

                </CardActions>
            </Card>

            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Compartir"}<br></br>{"¿A través de qué plataforma desea compartir"}
                    </DialogTitle>
                    <DialogActions>
                        <WhatsAppIcon onClick={handleSubmitWhatsApp}></WhatsAppIcon>
                        <TelegramIcon onClick={handleSubmitTelegram}></TelegramIcon>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

        </>
    )
}

export default Noticia