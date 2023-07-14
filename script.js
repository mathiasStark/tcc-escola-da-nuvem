function showBiography(member) {
    var divMember = document.getElementById(member);
    var divsMembers = document.querySelectorAll('.div');

    for (var i = 0; i < divsMembers.length; i++) {
        if (divsMembers[i].id === member) {
            divsMembers[i].style.display = 'block';
        } else {
            divsMembers[i].style.display = 'none';
        }
    }
}
  