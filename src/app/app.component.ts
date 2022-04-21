import { Component, AfterViewInit } from '@angular/core';
import * as React from 'react';
import ParentComponent from './react-components/ParentComponent';
import * as ReactDOM from 'react-dom/client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.renderReact()
  }

  renderReact(){
    const root = ReactDOM.createRoot(
      document.getElementById('react-root') as HTMLElement
    );
    root.render(
      React.createElement(ParentComponent)
    )
  }
}
