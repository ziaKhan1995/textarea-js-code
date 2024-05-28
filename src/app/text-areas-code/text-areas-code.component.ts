import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
// import * as DOMPurify from 'dompurify';


@Component({
  selector: 'app-text-areas-code',
  templateUrl: './text-areas-code.component.html',
  styleUrls: ['./text-areas-code.component.css']
})
export class TextAreasCodeComponent implements OnInit {
  form = new FormGroup({
    textarea1: new FormControl('', [Validators.required]),
    textarea2: new FormControl('', [Validators.required]),
    textarea3: new FormControl('', [Validators.required]),
    textarea4: new FormControl('', [Validators.required])
  });
  constructor(
    private readonly dompurifySanitizer: NgDompurifySanitizer,
  ) { }

  ngOnInit() {
  }

  get f() {
    return this.form.controls;
  }
  initAndExecuteCode() {
    let values: any[] = [];
    values?.push(this.f['textarea1'].value);
    values?.push(this.f['textarea2'].value);
    values?.push(this.f['textarea3'].value);
    values?.push(this.f['textarea4'].value);

    console.log('form val', values);

    if (this.form?.valid) {
      this.executeOneByOne(values).then(res => {
        console.log('all codes executed',);
      }).catch(error => {
        console.log('An error occurred to execute a textarea code',);

      })
    }
    else {
      alert('Please code in each textarea');
    }

  }

  purifyCode(code: string) {
    // return this.dompurifySanitizer.sanitize( SecurityContext.SCRIPT,code, { USE_PROFILES: { html: true } });
  }

  executeJSCode(code: string, index: Number): Promise<any> {
    return new Promise((resolve, reject) => {
      try {

        /**
         * @important
         * @Here I tried to sanitize the code against attacks 
         * and the @NgDompurifySanitizer has the support  by by accepting script but runtime it says that 
         * @NgDompurifySanitizer does not support script
         */
        // const sanitizeJsCode = this.purifyCode(code);
        const sanitizeJsCode = eval(code);
        const func = new Function(sanitizeJsCode);
        func();

        console.log(`Textarea ${index} code executed successfully`);
        resolve(true);
      } catch (error) {
        console.error(`Error executing code in textarea ${index}:`, error);
        reject(error);
      }
    });
  }

  //execute in sequence
  executeOneByOne(arr: string[]) {
    let promise = Promise.resolve();
    for (let index = 0; index < arr?.length; index++) {
      const code = arr[index];
      promise = promise.then((res) => this.executeJSCode(code, index));

    }
    return promise;
  }

}
