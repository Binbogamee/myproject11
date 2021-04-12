import { style } from '@angular/animations';
import { identifierModuleUrl, NodeWithI18n } from '@angular/compiler';
import {Component} from '@angular/core';
import { Note } from './shared/interfaces/note.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'project11';

  inputName = null;
  inputValue = null;
  noteNumber = 1;

  notesArray: Note[] = [];

  addNote() {
    this.notesArray.push({
      id: this.noteNumber,
      name: this.inputName,
      text: this.inputValue,
      date: new Date()
    });
    this.noteNumber++;
    this.inputName = null;
    this.inputValue = null;
  }

  delNote(id){
    this.notesArray.splice(this.notesArray.findIndex(elm => elm.id == id), 1);
  }
}
