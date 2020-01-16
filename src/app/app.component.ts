import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery:any;
declare var $:any;

import sample from './form.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  form = '';
  customForm = sample;
  data = {};
  rendered = false;

  ngOnInit() {
    this.form = this.getUrlQuery('form') || 'https://examples.form.io/example';
  }

  getUrlQuery (key) {
    let query = {};
    location.search.substr(1).split("&").forEach(function(item) {
      query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
    });
    return key ? query[key] : query;
  }

  onRendered () {
    console.log('Form rendered!');
    this.rendered = true;
  }

  onChange(event) {
    console.log('Submission changed!', event);
    if (event.data) {
      this.data = event.data;
    }
  }

  onSubmit(event) {
    alert('form submitted!')
  }
}
