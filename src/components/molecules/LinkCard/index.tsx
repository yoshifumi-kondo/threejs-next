import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link'
import { LinkCardProps } from '../../../types/Component';



const LinkCard: React.FunctionComponent<LinkCardProps> = ({ title, description, path, imageSrc }) => {
    const defaultImageSrc = 'title/coming-soon.jpg'
    return (
        <>
            <Link href={path ? path : ""}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={imageSrc ? imageSrc : defaultImageSrc}
                            alt={title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography >
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </>
    );
}

export default LinkCard
