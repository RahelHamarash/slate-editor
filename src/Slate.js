import React from 'react'
import { SlateEditor, SlateToolbar, SlateContent } from 'slate-editor'
import { BoldPlugin, BoldButton } from './components/plugins/bold' ;
import {AlignmentCenterButton,AlignmentLeftButton,AlignmentRightButton,AlignmentPlugin} from './components/plugins/alignment/index'
const plugins = [
  
  BoldPlugin(),
  AlignmentPlugin()

]

const Slate = () => (
  <div class="ui raised very padded text container segment">

    <SlateEditor plugins={plugins}>
      <SlateToolbar>
        <h2>
        <BoldButton />
        <AlignmentRightButton/>
        <AlignmentCenterButton/>
        <AlignmentLeftButton/>
        </h2>
      </SlateToolbar>

          <SlateContent/>
    </SlateEditor>
  </div>
)

export default Slate

