#!/usr/bin/python

class Sudoku:
    def __init__(self, board):
        # self.board = board
        self.col = [['1', '2', '3', '4', '5', '6', '7', '8', '9'] for _ in range(9)]
        self.colBlocked = [[[], [], []] for _ in range(9)]
        self.row = [['1', '2', '3', '4', '5', '6', '7', '8', '9'] for _ in range(9)]
        self.rowBlocked = [[[], [], []] for _ in range(9)]
        self.cube = [[['1', '2', '3', '4', '5', '6', '7', '8', '9'] for _ in range(3)] for _ in range(3)]
        self.counts = {'1':9, '2':9, '3':9, '4':9, '5':9, '6':9, '7':9, '8':9, '9':9}

        self.board = [['-' for _ in range(9)] for _ in range(9)]
        for i in range(9):
            for j in range(9):
                if board[i][j] in ['1', '2', '3', '4', '5', '6', '7', '8', '9']:
                    self.insert(i, j, board[i][j])
        self.updateColRowCube()

    def updateColRowCube(self):
        for i in range(len(self.row)):
            for j in range(len(self.col)):
                if self.board[i][j] in ['1', '2', '3', '4', '5', '6', '7', '8', '9']:
                    # Block this element in it's row and column in cubes containing these rows and columns
                    self.addBlock(i, j, self.board[i][j])
                    # remove from column row and cube options
                    if self.board[i][j] in self.col[j]:
                        self.col[j].remove(self.board[i][j])
                    if self.board[i][j] in self.row[i]:
                        self.row[i].remove(self.board[i][j])
                    if self.board[i][j] in self.cube[int(i/3)][int(j/3)]:
                        self.cube[int(i/3)][int(j/3)].remove(self.board[i][j])

    def options(self, i, j):
        if not self.positionSolved(i, j):
            rowOptions = list(set(self.row[i]) - set(self.rowBlocked[i][int(j/3)]))
            colOptions = list(set(self.col[j]) - set(self.colBlocked[j][int(i/3)]))
            rowColset = set(rowOptions).intersection(colOptions)
            # rowColset = set(self.row[i]).intersection(self.col[j])
            return list(rowColset.intersection(self.cube[int(i/3)][int(j/3)]))
        else:
            return self.board[i][j]

    def positionSolved(self, i, j):
        return self.board[i][j] in ['1', '2', '3', '4', '5', '6', '7', '8', '9']

    def insert(self, i, j, element):
        if (not self.positionSolved(i, j)) and (str(element) in self.options(i, j)):
            print(str(element) + " -> [" + str(i) + "][" + str(j) + "]")
            self.board[i][j] = str(element)
            self.counts[str(element)] = self.counts[str(element)] - 1
            self.updateColRowCube()
        elif self.positionSolved(i, j):
            print("Position " + str(i) + " " + str(j) + " has been solved.")
        else:
            print(str(element) + " is not a valid option for position " + str(i) + " " + str(j))

    def blocked(self, i, j):
        rowBlocks = set(self.rowBlocked[i][int(j/3)])
        colBlocks = set(self.colBlocked[j][int(i/3)])
        cubeTaken = set(['1', '2', '3', '4', '5', '6', '7', '8', '9']) - set(self.cube[int(i/3)][int(j/3)])
        return list(rowBlocks | colBlocks | cubeTaken)

    def addBlock(self, i, j, element):
        """Blocks represent elements that must be in a specific row or column but their specific
        position within a cube may or may not yet be known"""
        self.addRowBlock(i, j, element)
        self.addColBlock(i, j, element)

    def rowIsBlocked(self, i, j, element):
        if (element not in self.rowBlocked[i][(int(j/3)+1)%3]) and (element not in self.rowBlocked[i][(int(j/3)+2)%3]):
            return False
        return True

    def addRowBlock(self, i, j, element):
        if element not in self.rowBlocked[i][(int(j/3)+1)%3]:
            self.rowBlocked[i][(int(j/3)+1)%3].append(element)
        if element not in self.rowBlocked[i][(int(j/3)+2)%3]:
            self.rowBlocked[i][(int(j/3)+2)%3].append(element)

    def colIsBlocked(self, i, j, element):
        if (element not in self.colBlocked[j][(int(i/3)+1)%3]) and (element not in self.colBlocked[j][(int(i/3)+2)%3]):
            return False
        return True

    def addColBlock(self, i, j, element):
        if element not in self.colBlocked[j][(int(i/3)+1)%3]:
            self.colBlocked[j][(int(i/3)+1)%3].append(element)
        if element not in self.colBlocked[j][(int(i/3)+2)%3]:
            self.colBlocked[j][(int(i/3)+2)%3].append(element)

    def addImpliedBlocks(self):
        """When a cubes option must exist in a specific row or column,
        block the option in that row or column in other cubes"""
        for ci in range(len(self.cube)):
            for cj in range(len(self.cube[ci])):
                cubeOptions = sudoku.cube[ci][cj]
                membershipRow = {}
                membershipCol = {}
                for co in cubeOptions:
                    membershipRow[co] = []
                    membershipCol[co] = []
                for i in range(3):
                    for j in range(3):
                        reali = i+ci*3
                        realj = j+cj*3
                        if not self.positionSolved(reali, realj):
                            opt = self.options(reali, realj)
                            for o in opt:
                                if reali not in membershipRow[o]:
                                    membershipRow[o].append(reali)
                                if realj not in membershipCol[o]:
                                    membershipCol[o].append(realj)
                for co in cubeOptions:
                    if len(membershipRow[co]) == 1 and not self.rowIsBlocked(membershipRow[co][0], cj*3, co):
                        # print(str(ci) + " " + str(cj) + " " + str(co))
                        print("BR:" + str(co) + " [" + str(ci) + "][" + str(cj) + "]")
                        # print(membershipRow[co])
                        self.addRowBlock(membershipRow[co][0], cj*3, co)
                    if len(membershipCol[co]) == 1 and not self.colIsBlocked(ci*3, membershipCol[co][0], co):
                        # print(str(ci) + " " + str(cj) + " " + str(co))
                        print("BC:" + str(co) + " [" + str(ci) + "][" + str(cj) + "]")
                        # print(membershipCol[co])
                        self.addColBlock(ci*3, membershipCol[co][0], co)

    def solveSpaceSingleOptions(self):
        "If the intersection of options for a specific row column and cube contains only one option insert it"
        changes = True
        while changes:
            changes = False
            for i in range(len(self.row)):
                for j in range(len(self.col)):
                    if not self.positionSolved(i, j):
                        opt = self.options(i, j)
                        if len(opt) == 1:
                            self.insert(i, j, opt[0])
                            changes = True
        
    def solveCubeSingleOptions(self):
        "Take remaining options for a cube, if an option belongs to only one empty position insert it"
        changes = True
        while changes:
            changes = False
            for ci in range(len(self.cube)):
                for cj in range(len(self.cube[ci])):
                    cubeOptions = sudoku.cube[ci][cj]
                    membership = {}
                    membershipRow = {}
                    membershipCol = {}
                    for co in cubeOptions:
                        membership[co] = []
                        membershipRow[co] = []
                        membershipCol[co] = []
                    for i in range(3):
                        for j in range(3):
                            reali = i+ci*3
                            realj = j+cj*3
                            if not self.positionSolved(reali, realj):
                                opt = self.options(reali, realj)
                                for o in opt:
                                    membership[o].append({'i':reali, 'j':realj})
                                    if reali not in membershipRow[o]:
                                        membershipRow[o].append(reali)
                                    if realj not in membershipCol[o]:
                                        membershipCol[o].append(realj)
                    for co in cubeOptions:
                        # print(co)
                        # print(membership[co])
                        if len(membership[co]) == 1:
                            self.insert(membership[co][0]['i'], membership[co][0]['j'], co)
                            changes = True
                        """When a cubes option must exist in a specific row or column,
                        block the option in that row or column in other cubes"""
                        if len(membershipRow[co]) == 1 and not self.rowIsBlocked(membershipRow[co][0], cj*3, co):
                            # print("BR:" + str(co) + " [" + str(membershipRow[co][0]) + "][" + str(cj*3) + "]")
                            self.addRowBlock(membershipRow[co][0], cj*3, co)
                            changes = True
                        if len(membershipCol[co]) == 1 and not self.colIsBlocked(ci*3, membershipCol[co][0], co):
                            # print("BC:" + str(co) + " [" + str(ci*3) + "][" + str(membershipCol[co][0]) + "]")
                            self.addColBlock(ci*3, membershipCol[co][0], co)
                            changes = True
            self.solveSpaceSingleOptions()

    def solvePairForcedPlacement(self):
        """If two options must exist in two spaces, and a third option must exists in
        one of those spaces or one other space, insert the third option in the other space"""
        changes = True
        while changes:
            changes = False
            for ci in range(len(self.cube)):
                for cj in range(len(self.cube[ci])):
                    cubeOptions = sudoku.cube[ci][cj]
                    # print("Cube " + str(ci) + " " + str(cj))
                    # print(cubeOptions)
                    membership = {}
                    for co in cubeOptions:
                        membership[co] = []
                    for i in range(3):
                        for j in range(3):
                            reali = i+ci*3
                            realj = j+cj*3
                            if not self.positionSolved(reali, realj):
                                opt = self.options(reali, realj)
                                for o in opt:
                                    membership[o].append({'i':reali, 'j':realj})
                    for co in cubeOptions:
                        if len(membership[co]) == 2:
                            for co2 in cubeOptions:
                                if co != co2 and len(membership[co2]) == 2 and membership[co] == membership[co2]:
                                    # print(str(co) + " & " + str(co2) + " [" + str(ci) + "][" + str(cj) + "]")
                                    options = list(set(self.options(membership[co][0]['i'], membership[co][0]['j']) + self.options(membership[co][1]['i'], membership[co][1]['j'])) - set([co, co2]))
                                    # print(options)
                                    for possiblyPinch in options:
                                        if len(membership[possiblyPinch]) == 2:
                                            for coord in membership[possiblyPinch]:
                                                if not coord == membership[co][0] and not coord == membership[co][1]:
                                                    self.insert(coord['i'], coord['j'], possiblyPinch)
                                                    changes = True
            self.solveCubeSingleOptions()


    def printBoard(self):
         for i, col in enumerate(self.board):
            print(' '.join(col[:3]) + ' | ' + ' '.join(col[3:6]) + ' | ' + ' '.join(col[6:9]))
            if (i+1)%3 == 0 and i < 8:
                print('------+-------+------')

if __name__=="__main__":
    board = [['-' for _ in range(9)] for _ in range(9)]
    # for i, col in enumerate(board):
    #     colSet = False
    #     while not colSet:
    #         iput = input(str(i) + ": ")
    #         iput = iput.split(' ')
    #         if len(iput) == 9:
    #             board[i] = iput
    #             colSet = True

    with open('puzzle.txt') as f:
        lines = f.readlines()
        for i, line in enumerate(lines):
            iput = line[:-1].split(' ')
            # print(iput)
            if len(iput) == 9:
                board[i] = iput
                colSet = True

    # board = [['-','-','7','-','-','-','4','1','-'],
    #         ['3','-','4','7','8','-','-','6','9'],
    #         ['-','5','6','-','2','-','-','8','7'],
    #         ['-','-','2','-','3','-','-','-','5'],
    #         ['-','-','-','-','4','-','-','-','-'],
    #         ['8','-','-','-','7','-','6','-','-'],
    #         ['6','4','-','-','5','-','9','3','-'],
    #         ['2','7','-','-','9','3','8','-','6'],
    #         ['-','9','3','-','-','-','2','-','-']]

    sudoku = Sudoku(board)

    print("\nThe Puzzle...")
    sudoku.printBoard()
    print("Solving Initial Single Option Positions...")
    sudoku.solveSpaceSingleOptions()
    sudoku.printBoard()
    print("Solving Cube Options with Single Position Membership...")
    sudoku.solveCubeSingleOptions()
    sudoku.printBoard()
    print("Solving Pair-Forced Placement...")
    sudoku.solvePairForcedPlacement()
    sudoku.printBoard()

    while True:
        command = input("? ")
        options = command.split(' ')[1:]

        if "can" in command:
            if "row" in command:
                print(sudoku.row[int(options[-1])])
            elif "col" in command:
                print(sudoku.col[int(options[-1])])
            elif "cube" in command:
                print(sudoku.cube[int(options[-2])][int(options[-1])])
                for ci in range(len(sudoku.cube)):
                    for cj in range(len(sudoku.cube[ci])):
                        if sudoku.board[int(options[-2])*3+ci][int(options[-1])*3+cj] not in ['1', '2', '3', '4', '5', '6', '7', '8', '9']:
                            print("[" + "][".join([str(int(options[-2])*3+ci), str(int(options[-1])*3+cj)]) + "] " + ", ".join(sudoku.options(int(options[-2])*3+ci, int(options[-1])*3+cj)))
            else:
                print(sudoku.options(int(options[-2]), int(options[-1])))
        elif "not" in command:
            if "row" in command:
                print(sudoku.rowBlocked[int(options[-1])])
            elif "col" in command:
                print(sudoku.colBlocked[int(options[-1])])
            elif "cube" in command:
                for ci in range(len(sudoku.cube)):
                    for cj in range(len(sudoku.cube[ci])):
                        if sudoku.board[int(options[-2])*3+ci][int(options[-1])*3+cj] not in ['1', '2', '3', '4', '5', '6', '7', '8', '9']:
                            print("[" + "][".join([str(int(options[-2])*3+ci), str(int(options[-1])*3+cj)]) + "] " + ", ".join(sudoku.blocked(int(options[-2])*3+ci, int(options[-1])*3+cj)))
            else:
                print(sudoku.blocked(int(options[-2]), int(options[-1])))
        elif "insert" in command:
            sudoku.insert(int(options[-3]), int(options[-2]), int(options[-1]))
        elif "block" in command:
            if "row" in command:
                sudoku.addRowBlock(int(options[-3]), int(options[-2]), int(options[-1]))
            elif "col" in command:
                sudoku.addColBlock(int(options[-3]), int(options[-2]), int(options[-1]))
            else:
                sudoku.addBlock(int(options[-3]), int(options[-2]), int(options[-1]))
        elif "print" in command:
            sudoku.printBoard()
        elif "counts" in command:
            keys = list(sudoku.counts.keys())
            keys.sort()
            for key in keys:
                print(str(key) + ":" + str(sudoku.counts[key]))
        elif "update" in command:
            sudoku.solveCubeSingleOptions()
            sudoku.printBoard()
