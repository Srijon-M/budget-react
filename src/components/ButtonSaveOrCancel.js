import React from 'react'
import { Button } from 'semantic-ui-react'

function ButtonSaveOrCancel({addEntry}) {
    return (
        <Button.Group style={{ marginTop: '20px' }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button 
            primary
            onClick={() => addEntry()}
          >Submit</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel
