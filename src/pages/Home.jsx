import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import GuestComponent from '../utils/GuestComponent';
import { Link } from 'react-router-dom';
import ProtectedComponent from '../utils/ProtectedComponent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

export default function Home() {


  return (
    <Box id="hero" sx={(theme) => ({
      width: '100%',
      backgroundImage:
        theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
          : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
      backgroundSize: '100% 20%',
      backgroundRepeat: 'no-repeat',
    })}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            TasWiz&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              任务看板
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            任何项目轻松管理，<br />
            务实提升生产效率。<br />
            看清各类任务进展，<br />
            板上钉钉取得成功。<br />
          </Typography>
          <GuestComponent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Link to="/signin">
                  <Button variant="contained" color="primary" sx={{ my: 2 }} fullWidth>
                    登录
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Link to="/signup">
                  <Button variant="outlined" color="primary" sx={{ my: 2 }} fullWidth>
                    注册
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </GuestComponent>
          <ProtectedComponent>
            <Link to="/dashboard">
              <Button variant="contained" color="primary" sx={{ my: 2 }} fullWidth>
                进入看板
              </Button>
            </Link>
          </ProtectedComponent>
        </Stack>
      </Container>
    </Box >
  );
}