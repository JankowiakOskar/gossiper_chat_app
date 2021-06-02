export enum ModalKind {
  RoomCreatorModal = 'ROOM_CREATOR_MODAL',
  AccessRoomModal = 'ACCESS_ROOM_MODAL',
}

export interface ModalState {
  selectedModal: ModalKind | '';
}
