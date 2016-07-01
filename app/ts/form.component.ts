import {Component, Inject} from 'angular2/core';
import {Control, Validators, FormBuilder} from 'angular2/common';
import { MediaItemService } from './media-item.service';
import { MOVIE_CAT_LIST } from './myProviders';
import {Router} from 'angular2/router';


@Component({
    selector: 'the-form',
    templateUrl: 'app/templates/form.component.html',
    styleUrls: ['app/css/form.component.css'],
 
})
export class FormComponent {

    form;

    constructor(private formBuilder: FormBuilder, 
    private mediaService:MediaItemService,
    @Inject('LOOKUP_LISTS') public lookupLists,
    @Inject(MOVIE_CAT_LIST) public catList,
    private myRouter:Router
    ) { }


    ngOnInit() {
        this.form =this.formBuilder.group({
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
            var msg = 'to Late';
            if(year < minYear)
            {
                msg = 'to Early';
            }


            return {'year' : { 'min': minYear, 'max': maxyear, 'msg':msg} };// form in-valid
        } 
        
    }



    submitingData(data){
       // this.mediaService.add(data);
       this.mediaService.add(data).subscribe();
       this.myRouter.navigate(['../List', {medium: data.medium }])
    }
}