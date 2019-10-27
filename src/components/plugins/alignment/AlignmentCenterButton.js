import React from 'react'
import classnames from 'classnames'
import { Button } from '@slate-editor/components'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'

import { alignmentMarkStrategy, hasMark, getMark } from './AlignmentUtils'

const AlignmentCenterButton = ({ value, onChange, changeState, className, style, type }) => (
  <Button
    style={style}
    type={type}
    onClick={e => onChange(alignmentMarkStrategy(value.change(), 'center'))}
    className={classnames(
      'slate-alignment-plugin--button',
      { active: hasMark(value) && getMark(value).data.get('align') === 'center' },
      className,
    )}
  >
    <Icon name="align center" size="small"/>
  </Button>
)

export default AlignmentCenterButton