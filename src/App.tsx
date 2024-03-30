import ParamsEditor, { Model, Param } from './ParamsEditor'

const params: Param[] = [
	{ id: 1, name: 'Назначение', type: 'string' },
	{ id: 2, name: 'Длина', type: 'string' },
]

const model: Model = {
	paramValues: [
		{ paramId: 1, value: 'Повседневное' },
		{ paramId: 2, value: 'Макси' },
	],
	colors: [],
}

function App() {
	return <ParamsEditor params={params} model={model} />
}

export default App
