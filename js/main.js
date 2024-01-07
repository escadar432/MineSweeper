'use strict'

var gBoard = {
    minesAroundCount: 0,
    isShown: false,
    isMine: false,
    isMarked: false
}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}
const MINE = `&#xf1e2;`

function init() {
    console.log("hiii")
    gBoard = buildBoard()
    setMinesNegsCount(gBoard)
    renderBoard(gBoard)
}

function buildBoard() {
    const board = createMat(gLevel.SIZE, gLevel.SIZE)

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            board[i][j] = { minesAroundCount: 0, isShown: false, isMine: false, isMarked: false }
        }
    }
    return board

}

function setMinesNegsCount(board) {

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
        }
    }
    board[0][0] = {
        minesAroundCount: 1,
        isShown: false,
        isMine: true,
        isMarked: false

    }

    board[3][3] = {
        minesAroundCount: 1,
        isShown: false,
        isMine: true,
        isMarked: false

    }
    console.log(board)

    return board
}

function renderBoard(board) {
    var strHtml = ''
    const elBoard = document.querySelector('.board')

    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>\n'

        for (let j = 0; j < board[0].length; j++) {
            const currCell = board[i][j]
            var cellClass = getClassName({ i, j })

            strHtml += `\t<td class="cell ${cellClass}" onclick="clickedCell(${i},${j})">`
        }
        strHtml += '</tr>\n'

        elBoard.innerHTML = strHtml


    }


}

function onCellClicked(elCell, i, j) {

}

function onCellMarked(elCell) {

}

function checkGameOver() {

}

function expandShown(board, elCell, i, j) {

}

function getClassName(position) {
    const cellClass = `cell-${position.i}-${position.j}`
    return cellClass
}
