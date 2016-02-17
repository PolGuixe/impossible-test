import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import ItemList from '../items/components/ItemList.jsx';

export default function (injectDeps, {FlowRouter}) {
   const MainLayoutCtx = injectDeps(MainLayout);
   FlowRouter.route('/', {
     name: 'items.list',
     action() {
       mount(MainLayoutCtx, {
         content: () => (<ItemList/>)
       });
     }
   });
}
