import React from 'react'
import classnames from 'classnames'
import { Icon } from 'semantic-ui-react'
import { Button } from '@slate-editor/components'
import { boldMarkStrategy, hasMark } from './BoldUtils'
import 'semantic-ui-css/semantic.min.css'


const BoldButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(boldMarkStrategy(value.change()))}
    className={classnames(
      'slate-bold-plugin--button',
      { active: hasMark(value) },
      className,
    )}
  >
    <Icon  name="bold" size="small"/>
  </Button>
)

export default BoldButton
