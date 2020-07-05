import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { MenuItem } from 'primeng/api';
import { Color } from 'ngx-color/helpers/color.interfaces';

interface Font {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  items: MenuItem[];
  note1: string;
  text1: string;
  notes: any;

  showNotes: boolean;
  showFormatter: boolean;
  showCanvasBorder: boolean;

  noteCount: number;
  fontSize: number;
  fontColor: string;
  backgroundColor: string;
  fontList: Font[];
  fontName: Font;

  formatTabs: MenuItem[];
  selectedFormatTab: string;

  constructor() { }

  ngOnInit(): void {

    this.showNotes = false;   // default notes are off
    this.showFormatter = false;  // formatter closed
    this.noteCount = 1;       // temporary notes counter just to iterate and show boxes
    this.fontSize = 14;     
    this.fontColor = '#000';
    this.backgroundColor = '#fff';


    this.fontList = [
      { 'name': 'Segoe UI, Roboto, Helvetica' },
      { 'name': 'Arial, sans-serif' },
      { 'name': 'Times, serif' },
      { 'name': 'Andale Mono, monospace' },
      { 'name': 'Courier New, monospace' },
      { 'name': 'Lucidatypewriter, monospace' },
      { 'name': 'Comic Sans, Comic Sans MS, cursive' },
      { 'name': 'Impact, fantasy' }];

    this.fontName = this.fontList[0];

    this.items = [
      {
        icon: 'pi pi-fw pi-home',
        title: 'Home'
      },
      {
        icon: 'pi pi-fw pi-user',
        title: 'Format',
        command: (event: Event) => {
          this.showFormatter = !this.showFormatter;
        }
      },
      {
        icon: 'pi pi-fw pi-pencil',
        title: 'Notes',
        command: (event: Event) => {
          this.showNotes = !this.showNotes;
        }
      },
      {
        icon: 'pi pi-fw pi-clone',
        title: 'Chapters'
      },
      {
        icon: 'pi pi-fw pi-eye',
        title: 'Focus mode'
      }
    ];

    this.notes = [{}];

    this.selectedFormatTab = 'text';

  }

  addNote() {
    this.notes.push({});
  }

  removeNote() {
    debugger;
    this.notes.remove(0);
  }

  changeFontColor($event: ColorEvent) {
    this.fontColor = $event.color.hex;
  }

  changeBackgroundColor($event: ColorEvent) {
    this.backgroundColor = $event.color.hex;
  }

  resetFormat($event, type: string) {
    switch (type) {
      case 'text':
        this.fontColor = '#000';
        this.fontName = this.fontList[0];
        this.fontSize = 14;
        break;
      case 'background':
        this.backgroundColor = '#fff';
        break;
    }
  }
}
