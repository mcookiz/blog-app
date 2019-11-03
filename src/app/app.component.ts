import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-app';
  posts = [
    {
      title: 'Premier post',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque id consequat quam. In iaculis ipsum ligula.
                Pellentesque id tortor elit. Praesent scelerisque, leo laoreet faucibus ornare,
                enim lectus blandit felis, et tincidunt augue ante consectetur massa. Etiam vulputate,
                felis at venenatis hendrerit, lorem arcu ullamcorper leo, eget ultricies lacus libero ac libero.
                Suspendisse eget purus in dolor accumsan euismod ac efficitur urna. Sed eu placerat sapien.`,
      loveIts: 2,
      created_at: new Date('2019-01-16')
    },
    {
      title: 'Deuxième post',
      content: `Nam ac dui at arcu sollicitudin rutrum.
                Pellentesque nec facilisis tellus. Ut venenatis gravida massa sed dapibus.
                Morbi gravida dui placerat augue fermentum auctor.
                Fusce eget ipsum interdum, condimentum odio et, tincidunt odio.
                Praesent eget rhoncus ipsum. Nunc condimentum ullamcorper arcu, non rhoncus justo sagittis in.
                Etiam eu velit porttitor, porttitor nulla ut, aliquam neque.
                Integer sit amet hendrerit lorem. Sed interdum dolor a elit vehicula tristique.`,
      loveIts: -2,
      created_at: new Date('2019-09-16')
    },
    {
      title: 'Troisième post',
      content: `Nullam pharetra consequat dolor, ut aliquet tellus varius vel.
                Suspendisse at leo pretium, volutpat dolor cursus, dictum purus.
                Quisque eget aliquam metus, id hendrerit diam. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas mattis ante sit amet pharetra vehicula.
                Fusce enim odio, consectetur quis imperdiet at, egestas et arcu. Fusce ac pulvinar lectus.`,
      loveIts: 5,
      created_at: new Date('2019-10-16')
    },


  ];
}
