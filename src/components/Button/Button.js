import React from "react"
import { StyledButton } from "./Button.styled"

const Button = ({playing, setPlaying}) => 
<StyledButton playing={playing} onClick={() => setPlaying(!playing)}>{playing ? 'Stop' : 'Play'}</StyledButton>

export default Button