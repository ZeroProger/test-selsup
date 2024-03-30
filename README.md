## Тестовое задание "Редактор параметров" для компании Selsup

Деплой решения: https://zeroproger.github.io/test-selsup/

Весь код решения лежит в файле: `src/ParamsEditor.tsx`

Пример последовательности действий для добавления параметра с типом number:<br>
1. Изменяем интерфейс Param
```javascript
export interface Param {
	id: number
	name: string
	type: 'string' | 'number'
}
```
2. Изменяем интерфейс ParamValue
```javascript
interface ParamValue {
	paramId: number
	value: string | number
}
```
3. Добавляем проверку на тип в метод render(), для рендера input с нужной нам логикой.
```javascript
{param.type === 'number' && (
  <>
    <label htmlFor={String(param.id)}>{param.name}</label>
    <input
      type="number"
      {/* Остальные props */}
    />
  </>
)}
```

#### Добавление поддержки массивов и других типов для Param реализуется похожим образом.<br>
#### Решение считаю легко расширяемым, т.к. не нужно никак менять код метода ```handleChange()```, просто поправляем типы, и добавляем поддержку нового типа в методе ```render()```.<br>
#### Проверил с number - всё прекрасно работает, с array проверять не стал т.к. появляется слишком много новой логики, не получится отделаться простым input как в случае с string и number.



