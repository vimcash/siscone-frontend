import { Box, Typography, FormControl, FormHelperText, 
TextField, TextareaAutosize, Stack, Select, 
MenuItem, Button } from '@mui/material';

import { FormProps } from '../../../interfaces/common';
import { CustomButton } from '../CustomButton/index';

export const Form = ({ type, register,
  handleSubmit, handleImageChange,
  formLoading, onFinishHandler, productImage }: FormProps ) => {
  return (
    <Box sx={{
      width: {lg: "80%"},
      marginRight: {md:4},
      flex: 1,
      ml: {xs:-6, sm:-6, md:-2, lg:4}
      }} 
        ml={3} mt={9} mb={2}>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Crear un Producto
      </Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form style={{ marginTop: '20px', width: '100%', display: 'flex',
        flexDirection: 'column', gap: '20px'}} onSubmit={() => {}}>
          <FormControl>
            <FormHelperText sx={{fontWeight: 700, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
              Nombre del Producto
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              // {...register('title', {
              //   required: true})}
            />
          </FormControl>
          {/* Descripciones de los Producto */}
          <FormControl>
            <FormHelperText sx={{fontWeight: 700, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
              Descripcion del Producto
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Escribe una descripcion"
              style={{ width: '100%',
              background: 'transparent',
              fontSize: '16px', borderColor:
              'rgba(0,0,0,0.23)',
              borderRadius: 6, padding: 10,
              color: '#919191' }}
              // {...register('title', {
              // required: true})}
            />
          </FormControl>
          {/* Items o tipos de productos ha seleccionar*/}
          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1, mt: {xs:-6.5, sm:-3.5, md:0}}}>
              <FormHelperText sx={{
                fontWeight: 700,
                margin: '10px 0',
                fontSize: 16,
                color: '#11142d'
              }}>
                Selecciona Tipo de Producto
              </FormHelperText>
              <Select
              variant="outlined"
              color="info"
              displayEmpty
              required
              inputProps={{
                'aria-label': 'Without label' }}
                defaultValue="producto"
                // {...register('productoType',
                // { required: true})}
              >
                {/* Items del menu Producto */}
                <MenuItem value="ropa">Ropa</MenuItem>
                <MenuItem value="comida">Comida</MenuItem>
                <MenuItem value="herramienta">Herramientas</MenuItem>
                <MenuItem value="materia">Material</MenuItem>
                <MenuItem value="Otro">Otro</MenuItem>
              </Select>
            </FormControl>

              {/* Precio de los productos*/}
            <FormControl>
            <FormHelperText sx={{fontWeight: 700, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
              Precio del Producto
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              type="number"
              variant="outlined"
              // {...register('price', {
              //   required: true})}
            />
            </FormControl>
          </Stack>
          {/* categorias de los productos */}
          <FormControl>
            <FormHelperText sx={{fontWeight: 700, margin: '10px 0', fontSize: 16, color: '#11142d'}}>
              Categoria del Producto
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              // {...register('categoria', {
              //   required: true})}
            />
            </FormControl>

            {/* Imagen del Producto */}
            <Stack direction="column" gap={1} justifyContent="center" mb={2}>
                <Stack direction="row" gap={2}>
                  <Typography color="#11142d" fontSize={16}
                    fontWeight={700} my="10px">
                    Imagen del Producto
                  </Typography>
                  
                  {/* Boton de Subir Imagen */}
                  <Button component="label" sx={{ width: 'fit-content', color: "#2ed480",
                    textTransform: 'capitalize', fontSize: 16}}>
                    Subir
                    <input 
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={((e) => {
                        // @ts-ignore
                        handleImageChange(e.target.files[0])
                      })}
                    />
                  </Button>
                </Stack>
                <Typography fontSize={14} color="#808191" sx={{
                  wordBreak: 'break-all'
                }}>
                  {productImage?.name}
                </Typography>
            </Stack>
            {/* Boton de Subir Producto */}
            <Stack sx={{
              width: {sm:"28%", md:"20%", lg: "13%", xl:"10%" },
              alignItems: "center",
              }}>
              <CustomButton 
                type='submit'
                title={formLoading ? 'Subiendo...' : 'Subir'}
                backgroundColor="#475be8"
                color="#fcfcfc"
              />
            </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default Form