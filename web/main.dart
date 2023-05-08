import 'package:sudoku/sudoku.dart';

void main() {
  final controller = Controller();
  final game = Game(controller: controller);
  Renderer(game: game);
}
