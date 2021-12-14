import './components.css'


interface InputInformation {
    name: string,
    type: string
}

export default function InputArea(props: Required<InputInformation>): any {


    if (props.type === 'submit') {
        return <input value={props.name} type={props.type} className='button_submit input_font' id='loginSubmit' required/>;
    } else return <input placeholder={props.name} type={props.type} className='input_area input_font' required/>;
}