import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

export const ProductPopup = ({ title, children, open, setOpen }:any) => {
  return (
      <Dialog
        aria-labelledby='dialog-title'
        open={open}
        >
          <DialogTitle id="dialog-title">Detalles</DialogTitle>
          <DialogContent>
              {children}
          </DialogContent>
          <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Submit</Button>
          </DialogActions>
      </Dialog>
  )
}

export default ProductPopup