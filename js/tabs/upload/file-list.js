import MatreshkaArray from 'matreshka/array';

export default class FileList extends MatreshkaArray {
    itemRenderer = `
        <div class="file-item">
            {{name}}
            <span class="remove"></span>
        </div>
    `;

    constructor(data = []) {
      super(...data)
        .bindNode({
          sandbox: '#upload',
          container: ':sandbox .file-list'
        })
        .on({
          '*@click::(.remove)': ({ self }) => this.pull(self)
        })
        .rerender();
    }
}
