import * as React from "react"
export interface IPropsChildren{
    children?: React.ReactNode;
}

export interface IPropsConstants{
    
    name:string;
    enthusiasmLevel?:number;
}

export interface IPropsActions{
    onIncrement:(count:number)=>void;
    onDecrement:(count:number)=>void;
}

interface IProps extends IPropsChildren,IPropsConstants,IPropsActions{

}

interface IState {
    data:string;
}
function getExclamationMarks(count:number){
    return Array(count+1).join("!")
}

export class Hello extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {
            data:"1"
        }
    }
    // private handleDecrement = (e:any)=>{
    //     this.props.onDecrement(count)
    // }
    public render() {
        const {name,enthusiasmLevel=0,onDecrement,onIncrement} = this.props
        const count =1 ;
        const count2 = 2;
        const dec:(event:any)=>void= (even:any)=>{onDecrement(count)}
        const inc:(event:any)=>void= (even:any)=>{onIncrement(count2)}
        return (
            <div>
                {`Hello ${name}  ${getExclamationMarks(enthusiasmLevel)}`}
                { this.props.children }
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        )
    }
}
