import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector: 'the-form',
    templateUrl: 'app/templates/form.component.html',
    styleUrls: ['app/css/form.component.css']
})
export class FormComponent {

    form :ControlGroup;

    ngOnInit() {
        this.form = new ControlGroup({
            'medium':   new Control('Movies'), // movies default value
            'name':     new Control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
                             ])
                ),
            'category': new Control(),
            'year':     new Control('', this.yearValidator)

        });
    }


    yearValidator(control){
        var controlVal :string = control.value;
        if (controlVal.trim().length === 0)
        {
            return null; // form valid
        }

        var year:number = parseInt(controlVal);
        var minYear:number = 1900;
        var maxyear:number = 2020;
        if (year >= minYear && year <= maxyear)
        {
            return null;// form valid
        }
        else{
            var errors = {};


            return {'year' : '111', };// form in-valid
        }
        
    }








    submitingData(data){
        console.log(data);
    }
}