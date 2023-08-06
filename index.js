function changeContent(option) {
  let contentDiv = document.getElementById('content');
if (option === 'mount1') {
    contentDiv.innerHTML = `
    <div class="thiContent" id="content">
    <div class="card">
      <p>SCHEDULE</p>
      <table>
        <tr>
          <td>25 Nov 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr>
          <td>28 Nov 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr>
          <td>18 Dec 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr>
          <td>07 Jan 2017</td>
          <td>Vestibulum viverra</td>
        </tr>
      </table>
    </div>
  </div>
    `;
    contentDiv.style.backgroundImage = "url('/images/mountain\ 1.jpg')";
  } else if (option === 'mount2') {
    contentDiv.innerHTML = `
    <div class="thiContent" id="content">
    <div class="card">
      <p>SCHEDULE</p>
      <table>
        <tr>
          <td>17 Nov 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr>
          <td>13 Dec 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr>
          <td>28 Dec 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr>
          <td>09 Feb 2017</td>
          <td>Vestibulum viverra</td>
        </tr>
      </table>
    </div>
  </div>
    `;
    contentDiv.style.backgroundImage = "url('/images/mountain2.jpg')";
  } 
}
