import {
    AfterContentInit, Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, Output, PLATFORM_ID,
    Renderer2
} from "@angular/core";

@Directive({
    selector: '[image-loader]'
})
export class imageloaderDirective implements AfterContentInit, OnDestroy {
    private nativeElement: HTMLElement;
    private cancelOnError: Function;
    private cancelOnLoad: Function;
    private newImage;

    @Input() fallback: string = '';
    @Input() imgSize: string;
    @Output() emitOnError: EventEmitter<any> = new EventEmitter();

    constructor(
                private el: ElementRef,
                private renderer: Renderer2
                ){}

    ngAfterContentInit(){
      
    }

    registerEvents(){
        this.nativeElement = this.el.nativeElement;
        this.onError = this.onError.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.cancelOnError = this.renderer.listen(this.nativeElement, 'error', this.onError);
        this.cancelOnLoad = this.renderer.listen(this.nativeElement, 'load', this.onLoad);
    }

    loadLargeImage(url){
        url = '_' + '.jpg';
        this.newImage = new Image();
        this.newImage.src = url;
        this.newImage.onload = () => {
            this.renderer.setAttribute(this.nativeElement, 'src', this.newImage.src);
        }
    }

    private onError(){
        if(this.nativeElement.getAttribute('src') !== this.fallback){
            this.renderer.setAttribute(this.nativeElement, 'src', this.fallback);
            this.emitOnError.emit();
        }else{
            this.removeOnLoadEvent();
        }
    }

    private onLoad(){
        this.removeOnLoadEvent();
        let src = this.nativeElement.getAttribute('src');
        let srcSplit = src.split(/[_ ]+/);
        let strippedArr = srcSplit; 
        strippedArr.pop();
        let stripped = strippedArr.join('_');
        this.loadLargeImage(stripped);
    }

    private removeErrorEvent() {
        if (this.cancelOnError) {
            this.cancelOnError();
        }
    }

    private removeOnLoadEvent() {
        if (this.cancelOnLoad) {
            this.cancelOnLoad();
        }
    }

    ngOnDestroy(){
        this.removeErrorEvent();
        this.removeOnLoadEvent();
    }
}