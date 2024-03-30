import { Component, ReactNode } from 'react'
import styles from './ParamsEditor.module.css'

export interface Param {
	id: number
	name: string
	type: 'string'
}

interface ParamValue {
	paramId: number
	value: string
}

type Color = string

export interface Model {
	paramValues: ParamValue[]
	colors: Color[]
}

interface Props {
	params: Param[]
	model: Model
}

type State = Readonly<Model>

class ParamsEditor extends Component<Props, State> {
	public readonly state: State = {
		colors: [],
		paramValues: [],
	}

	constructor(props: Props) {
		super(props)

		this.state = props.model
	}

	public getModel(): Model {
		return this.state
	}

	private handleChange(newParamValue: ParamValue) {
		const newParamValues = this.state.paramValues.map((paramValue) => {
			if (paramValue.paramId === newParamValue.paramId) {
				return newParamValue
			}
			return paramValue
		})

		this.setState(
			(prev) => {
				return { ...prev, paramValues: newParamValues }
			},
			() => console.log(this.getModel())
		)
	}

	render(): ReactNode {
		return (
			<div className={styles.editor}>
				{this.props.params.map((param) => (
					<div className={styles.param} key={param.id}>
						{param.type === 'string' && (
							<>
								<label htmlFor={String(param.id)}>{param.name}</label>
								<input
									type="text"
									id={String(param.id)}
									value={this.state.paramValues.find((p) => p.paramId === param.id)?.value}
									onChange={(event) =>
										this.handleChange({ paramId: param.id, value: event.target.value })
									}
								/>
							</>
						)}
					</div>
				))}
			</div>
		)
	}
}

export default ParamsEditor
