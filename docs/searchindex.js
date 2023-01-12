Search.setIndex({"docnames": ["C/examples/decoding_packets", "C/examples/encoding_packets", "C/index", "bplprotocol/examples/force_torque_sensor", "bplprotocol/examples/joint_control", "bplprotocol/examples/master_arm_information", "bplprotocol/examples/master_arm_passthrough", "bplprotocol/examples/requesting_joint_positions", "bplprotocol/examples/setting_heartbeats", "bplprotocol/examples/simultaneous_joint_control", "bplprotocol/examples/voltage_threshold_parameters", "bplprotocol/index", "bplprotocol/sdk", "bplprotocol/sdk_install", "documentation/index", "index", "ros1/bpl_passthrough/request_joint_positions", "ros1/index", "ros2/bpl_passthrough/request_joint_positions", "ros2/index"], "filenames": ["C\\examples\\decoding_packets.rst", "C\\examples\\encoding_packets.rst", "C\\index.rst", "bplprotocol\\examples\\force_torque_sensor.rst", "bplprotocol\\examples\\joint_control.rst", "bplprotocol\\examples\\master_arm_information.rst", "bplprotocol\\examples\\master_arm_passthrough.rst", "bplprotocol\\examples\\requesting_joint_positions.rst", "bplprotocol\\examples\\setting_heartbeats.rst", "bplprotocol\\examples\\simultaneous_joint_control.rst", "bplprotocol\\examples\\voltage_threshold_parameters.rst", "bplprotocol\\index.rst", "bplprotocol\\sdk.rst", "bplprotocol\\sdk_install.rst", "documentation\\index.rst", "index.rst", "ros1\\bpl_passthrough\\request_joint_positions.rst", "ros1\\index.rst", "ros2\\bpl_passthrough\\request_joint_positions.rst", "ros2\\index.rst"], "titles": ["Decoding Packets", "Encoding Packets", "BPL Protocol - C/C++ SDK", "Accessing the Force Torque Sensor", "Controlling Joints", "Master Arm Information", "Master Arm Passthrough", "Requesting Joint Positions", "Setting Heartbeats", "Controlling Joints Simultaneously", "Voltage Threshold Parameters - Auto Stow on Voltage Change", "BPL Protocol", "BPL Protocol SDK", "Access to the SDK", "Documentation", "Reach Robotics SDK", "Using bpl_passthrough to get joint positions", "ROS", "Using bpl_passthrough to get joint positions", "ROS2"], "terms": {"exampl": [0, 1, 3, 5, 6, 7, 8, 9, 15, 16, 18], "how": [0, 1, 2, 7, 16, 17, 18, 19], "byte": [0, 1, 3, 5, 7, 8, 9, 10, 11, 12, 17, 19], "devic": [0, 1, 3, 5, 7, 8, 10, 11, 12, 19], "id": [0, 1, 7, 10, 11, 12, 19], "correspond": [0, 8, 19], "data": [0, 3, 6, 7, 8, 11, 12, 16, 17, 18, 19], "an": [0, 1, 3, 5, 6, 7, 8, 9, 12, 17], "The": [0, 3, 5, 6, 8, 9, 10, 11, 13, 15, 16, 17, 18, 19], "i": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 17, 19], "expect": 0, "come": [0, 12], "unsign": 0, "8": [0, 9, 10, 19], "bit": [0, 12], "interg": 0, "c": [0, 1, 15], "decodepacketexampl": [0, 2], "author": [0, 1], "john": [0, 1], "sumska": [0, 1], "email": [0, 1], "j": [0, 1], "reachrobot": [0, 1], "com": [0, 1, 17, 19], "date": [0, 1], "21": [0, 1], "06": [0, 1], "2022": [0, 1], "includ": [0, 1, 15, 19], "stdio": [0, 1], "h": [0, 1, 2], "bplprotocol": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 16, 17, 18, 19], "defin": 0, "packet_length": 0, "11": 0, "void": [0, 1], "main": [0, 1, 18], "encodepacket": [0, 1], "creat": [0, 1], "buffer": [0, 1, 12], "your": [0, 1, 6, 15, 17, 19], "fill": [0, 1], "uint8_t": [0, 1], "encodedpacket": [0, 1], "10": [0, 8, 9, 19], "1": [0, 1, 3, 5, 7, 8, 9, 10, 11, 18], "2": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 16, 17, 18, 19], "3": [0, 1, 4, 7, 8, 9, 10, 11, 17, 19], "4": [0, 1, 3, 4, 7, 8, 9, 10, 12, 16, 17, 18, 19], "5": [0, 1, 3, 4, 7, 8, 9, 10, 17], "9": [0, 10], "23": 0, "0": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 18], "set": [0, 1, 6, 10, 11, 16, 18], "zero": [0, 1], "memset": [0, 1], "max_packet_length": [0, 1], "encod": [0, 2, 11, 12, 17, 19], "follow": [0, 1, 2, 5, 6, 8, 9, 11, 17, 19], "inform": [0, 1, 7, 10, 11], "struct": 0, "devod": 0, "int": [0, 1, 11, 12, 17, 18, 19], "result": 0, "decodepacket": 0, "printf": [0, 1], "error": [0, 6], "length": 0, "d": [0, 1], "longer": 0, "than": [0, 8, 11], "maximum": [0, 8, 10], "n": [0, 1, 5], "return": [0, 12], "els": [0, 5, 11], "read": [0, 3, 5, 6, 8, 11, 12, 16, 18], "invalid": 0, "crc": 0, "check": 0, "did": 0, "match": 0, "unknown": 0, "deviceid": [0, 1], "packetid": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 16, 18], "datalength": [0, 1], "print": [0, 1, 3, 5, 6, 7, 8, 11, 16], "repres": 0, "thi": [0, 3, 5, 6, 7, 8, 9, 10, 16, 17, 18, 19], "show": [0, 7], "you": [0, 2, 5, 9, 13, 15, 17, 19], "convert": 0, "veri": 0, "common": 0, "form": [0, 9], "bpl": [0, 1, 15, 17, 19], "like": [0, 2, 9, 15], "posit": [0, 1, 4, 8, 9, 10, 11, 17, 19], "veloc": [0, 4, 5, 8, 11, 19], "decodepacketwithfloatexampl": 0, "158": 0, "239": 0, "131": 0, "64": 0, "184": 0, "ndecod": 0, "f": [0, 1, 5, 6, 7, 8, 11], "decodefloat": 0, "decodedfloat": 0, "some": [0, 2, 11, 19], "contain": [0, 11, 15, 17], "decodepacketwithfloatlistexampl": 0, "26": 0, "13": 0, "154": 0, "153": 0, "63": 0, "51": 0, "19": 0, "89": 0, "144": 0, "179": 0, "24": 0, "145": 0, "floatlist": [0, 1], "size_t": [0, 1], "floatlength": 0, "sdk": [1, 17, 19], "consist": [1, 10], "255": [1, 8], "arrai": 1, "encodepacketbareexampl": 1, "encodepacketbar": 1, "0x01": [1, 5, 11], "mode": [1, 5, 10], "packetlength": 1, "encodepacketexampl": 1, "memcpi": 1, "encodepacketwithfloatexampl": 1, "123": 1, "encodedfloatdata": 1, "encodefloat": 1, "6": [1, 7, 8], "welcom": [2, 11], "document": [2, 10, 11, 15], "here": [2, 11, 17, 19], "can": [2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 17, 19], "find": 2, "instruct": [2, 11, 17, 19], "Or": 2, "For": [2, 10, 11, 13, 17, 19], "full": [2, 11, 12, 13, 19], "access": [2, 11], "code": [2, 11], "found": [2, 11], "under": [2, 11, 19], "packet": [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 16, 17, 18, 19], "decod": [2, 5, 11, 12, 17, 19], "To": [2, 3, 10, 16, 17, 18, 19], "view": [2, 17, 19], "compil": 2, "them": 2, "so": [2, 5], "replac": 2, "name": [2, 19], "relev": 2, "would": [2, 9], "test": [2, 3, 7, 8, 16, 18], "cd": [2, 11, 17, 19], "gcc": 2, "o": 2, "example_script": 2, "bravo": [3, 5, 7, 10, 15, 17], "accessori": 3, "allow": [3, 6, 15, 17, 19], "detect": [3, 10], "appli": 3, "x": [3, 5, 8], "y": 3, "axi": 3, "ar": [3, 8, 10, 11, 12, 15, 17, 19], "label": 3, "z": 3, "along": [3, 12], "tare": 3, "achiev": 3, "send": [3, 4, 9, 10, 19], "ati_ft": 3, "0x0d": [3, 10], "ft_sensor": 3, "py": [3, 7, 8, 16, 18, 19], "ft": [3, 17], "done": [3, 5], "request": [3, 11, 16, 18, 19], "from": [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 19], "import": [3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 18], "time": [3, 4, 5, 6, 7, 8, 9, 10, 18], "packetread": [3, 5, 7, 8, 10, 11, 12], "socket": [3, 4, 7, 8, 9, 10], "manipulator_ip_address": [3, 4, 7, 8, 9, 10], "192": [3, 4, 7, 8, 9, 10, 16, 17, 18, 19], "168": [3, 4, 7, 8, 9, 10, 16, 17, 18, 19], "manipulator_port": [3, 4, 7, 8, 9, 10], "6789": [3, 4, 7, 8, 9, 10, 16, 17, 18, 19], "__name__": [3, 4, 5, 6, 7, 8, 9, 10, 16, 18], "__main__": [3, 4, 5, 6, 7, 8, 9, 10, 16, 18], "manipulator_address": [3, 4, 7, 8, 9, 10], "sock": [3, 4, 7, 8, 9, 10], "af_inet": [3, 4, 7, 8, 9, 10], "sock_dgram": [3, 4, 7, 8, 9, 10], "settimeout": [3, 7, 8, 10], "THe": 3, "tare_packet": 3, "encode_packet": [3, 4, 7, 8, 9, 10, 11, 12], "ati_ft_read": 3, "encode_float": [3, 4, 9, 10, 11, 12], "sendto": [3, 4, 7, 8, 9, 10], "sleep": [3, 4, 5, 6, 10, 16], "request_timeout": 3, "second": [3, 10], "pr": [3, 7, 8, 11], "while": [3, 5, 6, 7, 8, 16], "true": [3, 5, 6, 7, 8], "request_packet": [3, 7, 16, 18], "start_tim": 3, "packet_receiv": 3, "fals": 3, "try": [3, 5, 6, 7, 8], "recv_byt": [3, 7, 8], "address": [3, 7, 8, 17, 19], "recvfrom": [3, 7, 8], "4096": [3, 7, 8], "except": [3, 5, 6, 7, 8], "baseexcept": [3, 5, 6, 7, 8], "b": [3, 4, 5, 6, 7, 8, 9, 12], "receive_byt": [3, 5, 7, 8, 11, 12], "device_id": [3, 4, 7, 8, 9, 11, 12, 16, 18], "packet_id": [3, 7, 8, 11, 12, 16, 18], "ft_read": 3, "decode_float": [3, 5, 7, 8, 11, 12, 16, 18], "In": [3, 5, 7], "wa": [3, 7], "abl": [3, 7], "rate": [3, 16], "approxim": 3, "450": 3, "490": 3, "hz": [3, 7, 8, 16, 18], "udp": [3, 4, 6, 7, 8, 9, 16, 17, 18, 19], "connect": [3, 6, 7, 8, 16, 17, 18, 19], "base": [3, 7, 9, 16, 18, 19], "board": [3, 7], "individu": [4, 7, 9], "serial": [4, 5, 6, 9, 16, 17, 18, 19], "instal": [4, 5, 6, 13, 15], "pyseri": [4, 5, 6], "pip": [4, 5, 6, 17], "0x02": [4, 5, 11], "serial_port_nam": [4, 5, 9], "com10": [4, 9], "serial_port": [4, 5, 9, 16, 17, 18, 19], "baudrat": [4, 5, 6, 9, 17, 19], "115200": [4, 5, 6, 9, 17, 19], "pariti": [4, 5, 6, 9], "parity_non": [4, 5, 6, 9], "stopbit": [4, 5, 6, 9], "stopbits_on": [4, 5, 6, 9], "timeout": [4, 5, 6, 9], "radian": 4, "write": [4, 6, 9], "command": [4, 6, 11], "rel": 4, "relative_posit": 4, "A": [5, 7, 9, 11], "intend": [5, 19], "control": [5, 6, 11, 15, 19], "pass": [5, 6], "through": [5, 6], "stream": 5, "without": 5, "need": 5, "case": 5, "where": 5, "mai": [5, 11, 19], "wish": 5, "script": [5, 6, 16, 18], "provid": [5, 13, 19], "obtain": 5, "joint": [5, 8, 11, 17, 19], "state": [5, 19], "button": 5, "work": [5, 16, 18, 19], "7": [5, 7, 8, 10, 17], "fn": 5, "manipul": [5, 6, 10, 16, 17, 18, 19], "configur": [5, 6, 10, 15], "do": [5, 9], "via": [5, 6, 7, 16, 17, 18, 19], "reach": [5, 10, 13, 17, 19], "befor": 5, "run": [5, 15, 16, 18, 19], "wrist": [5, 11], "joystick": 5, "both": [5, 19], "same": 5, "math": 5, "type": 5, "list": [5, 9, 11, 12, 17, 19], "option": [5, 11, 12, 19], "packet_read": 5, "com19": 5, "joint_devic": 5, "0x03": 5, "0x04": 5, "0x05": 5, "0x06": 5, "0x07": 5, "joint_indexed_posit": 5, "float": [5, 10, 11, 12, 17, 19], "none": [5, 18], "len": [5, 7, 8], "joint_veloc": 5, "jaw_device_id": 5, "jaw_vel_cmd": 5, "wrist_device_id": 5, "wrist_vel_cmd": 5, "last_print_tim": 5, "pressed_button": 5, "print_frequ": 5, "20": [5, 10, 16, 18, 19], "0001": [5, 6], "t": 5, "join": 5, "0x": [5, 8], "02x": 5, "idx": [5, 7], "po": 5, "deg": 5, "2f": [5, 7], "vel": 5, "": [5, 11], "jaw": [5, 11], "cmd": 5, "mm": [5, 11], "read_data": 5, "1024": 5, "read_device_id": 5, "read_packet_id": 5, "data_byt": [5, 11], "0x0f": 5, "0x0c": 5, "index": [5, 7, 9], "data_float": 5, "continu": 5, "indexed_posit": 5, "degre": 5, "0xce": 5, "_mode": 5, "0x1d": 5, "paus": 5, "elif": 5, "button_press": 5, "0x0e": 5, "0x55": 5, "top": 5, "bottom": 5, "commun": [6, 10, 15, 16, 17, 18, 19], "port": [6, 16, 17, 18, 19], "easili": [6, 15], "forward": 6, "purpos": 6, "directli": 6, "master_arm_port": 6, "com1": 6, "arm_port": 6, "com2": 6, "master_arm_seri": 6, "arm_seri": 6, "begin": 6, "e": [6, 19], "either": 7, "its": 7, "all": [7, 9, 17, 19], "us": [7, 8, 10, 12, 13, 15, 17, 19], "broadcast": 7, "0xff": [7, 16, 18], "effici": 7, "arm": [7, 10, 11, 15, 17, 19], "400": [7, 16, 18], "over": [7, 8, 16, 18, 19], "requesting_joints_positions_udp": 7, "request_frequ": [7, 19], "100": [7, 16, 18], "receiv": [7, 11, 12, 16, 17, 18, 19], "next_req_tim": 7, "print_str": 7, "perf_count": 7, "3f": 7, "dev_id": 7, "zip": [7, 13], "publish": [8, 16, 18], "frequenc": [8, 16, 18, 19], "up": 8, "per": 8, "whole": 8, "number": 8, "between": 8, "have": [8, 10, 11], "been": [8, 16, 18], "support": [8, 17, 19], "behaviour": 8, "undefin": 8, "valu": 8, "greater": 8, "set_heartbeat": 8, "heartbeat_packet": 8, "packet_to_send": 8, "heartbeat_packets_set": 8, "heartbeat_set": 8, "heartbeat_frequency_set": 8, "heartbeat_frequ": 8, "sent": [8, 17, 19], "automat": [8, 10], "specifi": [8, 12], "thei": [8, 10, 17, 19], "listen": [8, 16, 18], "tx2": [8, 10], "must": [9, 11], "If": [9, 10, 12], "one": [9, 11], "after": [9, 10], "anoth": 9, "altern": 9, "concaten": 9, "proce": [9, 13], "out": 9, "onc": 9, "desir": 9, "end": [9, 11, 19], "effector": [9, 19], "g": 9, "desired_posit": 9, "5707": 9, "14159": 9, "enumer": 9, "function": 10, "abil": 10, "disabl": 10, "themselv": 10, "when": 10, "featur": [10, 19], "onli": [10, 17, 19], "avail": 10, "requir": [10, 13], "version": 10, "708": 10, "abov": 10, "enabl": [10, 15], "upon": 10, "being": 10, "within": 10, "margin": 10, "period": 10, "move": 10, "preset": 10, "more": [10, 11], "see": [10, 19], "system": [10, 15], "protocol": [10, 15], "voltage_threshold_paramet": 10, "0x99": 10, "min": 10, "v": 10, "minimum": 10, "trigger": 10, "max": 10, "save": 10, "v_min": 10, "v_max": 10, "27": 10, "thresh_tim": 10, "voltage_threshold_packet": 10, "ensur": 10, "reboot": 10, "factori": 10, "set_factory_mod": 10, "save_packet": 10, "set_standby_mod": 10, "pip3": [11, 19], "x00": 11, "null": 11, "append": 11, "togeth": [11, 19], "ani": 11, "split": [11, 12, 17, 19], "manual": [11, 14], "seper": 11, "incomplete_byt": 11, "seen": 11, "termin": 11, "read_byt": 11, "packet_splitt": [11, 12], "parse_packet": [11, 12], "reader": [11, 12], "reconstruct": 11, "incomplet": [11, 12], "each": 11, "element": 11, "tupl": [11, 12], "float_list": [11, 12], "other": 11, "non": 11, "integ": 11, "data_list": 11, "heartbeat": 11, "master": [11, 15], "passthrough": [11, 16, 17, 18, 19], "forc": 11, "torqu": 11, "sensor": [11, 17], "simultan": 11, "voltag": 11, "threshold": 11, "paramet": [11, 12], "auto": 11, "stow": 11, "chang": 11, "download": 13, "file": [13, 15, 16, 17, 18, 19], "robot": [13, 17, 19], "websit": 13, "password": 13, "open": 13, "copi": 13, "reach_robotics_sdk": [13, 17, 19], "folder": [13, 17, 19], "merg": 13, "prompt": 13, "integr": 14, "pdf": 14, "lite": 14, "softwar": 15, "tool": 15, "product": [15, 17, 19], "It": [15, 16, 18, 19], "user": 15, "easilti": 15, "differ": 15, "offer": 15, "variou": 15, "platform": 15, "languag": 15, "python": [15, 16, 17, 19], "we": 15, "rang": [15, 17, 19], "high": 15, "level": 15, "langaug": 15, "also": [15, 19], "low": 15, "even": 15, "intergr": 15, "embed": 15, "ros2": [15, 18], "quickli": 15, "visualis": [15, 19], "get": [15, 17, 19], "start": 15, "github": [15, 17, 19], "usag": 15, "alpha": [15, 17], "demonstr": [16, 18, 19], "launch": [16, 17, 18, 19], "roslaunch": [16, 17], "request_joint_positions_seri": 16, "dev": [16, 17, 18, 19], "ttyusb0": [16, 17, 18, 19], "request_joint_positions_udp": 16, "ip_address": [16, 17, 18, 19], "printout": [16, 18], "node": [16, 18, 19], "tx": [16, 17, 18, 19], "rx": [16, 17, 18, 19], "topic": [16, 18], "subscrib": [16, 18], "ha": [16, 18], "mcu": [16, 18], "usr": 16, "bin": 16, "env": 16, "ro": [16, 18, 19], "request_joint_posit": [16, 18], "rospi": 16, "bpl_msg": [16, 17, 18, 19], "msg": [16, 18], "def": [16, 18], "receive_packet": [16, 18], "bytearrai": [12, 16, 18], "format": [16, 18], "tx_publish": [16, 18], "queue_siz": 16, "init_nod": 16, "request_joint_position_script": [16, 18], "get_param": 16, "default": [16, 17, 19], "rx_subscrib": [16, 18], "is_shutdown": 16, "detail": [17, 19], "ros1": 17, "packag": [17, 19], "pleas": [17, 19], "http": [17, 19], "wiki": 17, "org": [17, 19], "first": [17, 19], "clone": [17, 19], "repositori": [17, 19], "workspac": [17, 19], "catkin_w": 17, "src": [17, 19], "git": [17, 19], "now": [17, 19], "build": [17, 19], "catkin_mak": 17, "sever": [17, 19], "core": [17, 19], "field": [17, 19], "structur": [17, 19], "uint8": [17, 19], "incom": [12, 17, 19], "refer": [17, 19], "string": [17, 19], "ip": [17, 19], "descript": [17, 19], "univers": [17, 19], "urdf": [17, 19], "ra": 17, "5001": [17, 19], "view_urdf": 17, "rb": [17, 19], "7001": [17, 19], "view_bravo_7": [17, 19], "view_bravo_5": [17, 19], "mk2": 17, "7201": 17, "view_bravo_7_ft": 17, "udp_passthrough_exampl": 18, "rclpy": 18, "class": [12, 18], "jointrequestexampl": 18, "__init__": 18, "self": 18, "super": 18, "declare_paramet": 18, "create_publish": 18, "create_subscript": 18, "timer": 18, "create_tim": 18, "timer_callback": 18, "get_logg": 18, "info": 18, "arg": [18, 19], "init": 18, "jre": 18, "spin": 18, "doc": 19, "en": 19, "foxi": 19, "html": 19, "dev_w": 19, "colcon": 19, "p": 19, "cintain": 19, "rviz": 19, "view_bravo_doubl": 19, "feedback": 19, "duplex": 19, "485": 19, "joints_stat": 19, "sensor_msg": 19, "jointstat": 19, "joint_nam": 19, "publish_frequ": 19, "pose": 19, "end_effector_pos": 19, "geometry_msg": 19, "posestamp": 19, "frame_id": 19, "tf": 19, "frame": 19, "maniul": 19, "bravo_base_link": 19, "still": 19, "develop": 19, "untest": 19, "veloicti": 19, "bringup": 19, "present": 19, "live": 19, "current": 19, "bravo_5_udp": 19, "bravo_7_udp": 19, "bravo_double_udp_launch": 19, "ip_address_a": 19, "port_a": 19, "ip_address_b": 19, "port_b": 19, "sourc": 12, "static": 12, "buff": 12, "0x00": 12, "input": 12, "separ": 12, "remain": 12, "packet_in": 12, "union": 12, "pars": 12, "unabl": 12, "param": 12, "32": 12, "divis": 12, "helper": 12, "account": 12}, "objects": {"": [[12, 0, 0, "-", "bplprotocol"]], "bplprotocol": [[12, 1, 1, "", "BPLProtocol"], [12, 1, 1, "", "PacketReader"]], "bplprotocol.BPLProtocol": [[12, 2, 1, "", "decode_floats"], [12, 2, 1, "", "encode_floats"], [12, 2, 1, "", "encode_packet"], [12, 2, 1, "", "packet_splitter"], [12, 2, 1, "", "parse_packet"]], "bplprotocol.PacketReader": [[12, 2, 1, "", "receive_bytes"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"]}, "titleterms": {"decod": 0, "packet": [0, 1], "singl": 0, "float": [0, 1], "list": [0, 1], "encod": 1, "us": [1, 2, 11, 16, 18], "struct": 1, "data": 1, "bpl": [2, 11, 12], "protocol": [2, 11, 12, 14], "c": 2, "sdk": [2, 11, 12, 13, 15], "enabl": [2, 11], "exampl": [2, 10, 11, 17, 19], "run": 2, "access": [3, 13], "forc": 3, "torqu": 3, "sensor": 3, "control": [4, 9], "joint": [4, 7, 9, 16, 18], "master": [5, 6, 14], "arm": [5, 6, 14], "inform": 5, "passthrough": 6, "request": 7, "posit": [7, 16, 18], "set": 8, "heartbeat": 8, "simultan": 9, "voltag": 10, "threshold": 10, "paramet": [10, 17, 19], "auto": 10, "stow": 10, "chang": 10, "usag": [10, 11, 17, 19], "python": 11, "instal": [11, 17, 19], "document": 14, "reach": [14, 15], "alpha": 14, "bravo": [14, 19], "system": 14, "commun": 14, "robot": 15, "program": 15, "interfac": 15, "ro": [15, 17], "2": 15, "support": 15, "download": 15, "content": 15, "bpl_passthrough": [16, 17, 18, 19], "get": [16, 18], "publish": [17, 19], "topic": [17, 19], "subscrib": [17, 19], "udp_passthrough": [17, 19], "py": 17, "serial_passthrough": [17, 19], "bpl_alpha_descript": 17, "bpl_bravo_descript": [17, 19], "bpl_bravo_description_mk2": 17, "ros2": 19, "bpl_control": 19, "joint_state_publish": 19, "end_effector_pose_publish": 19, "control_nod": 19, "bpl_bringup": 19, "5": 19, "7": 19}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Decoding Packets": [[0, "decoding-packets"]], "Decoding a Packet": [[0, "decoding-a-packet"]], "Decoding a Packet with a Single Float": [[0, "decoding-a-packet-with-a-single-float"]], "Decoding a Packet with a list of Floats": [[0, "decoding-a-packet-with-a-list-of-floats"]], "Encoding Packets": [[1, "encoding-packets"]], "Encoding a Packet": [[1, "encoding-a-packet"]], "Encoding a Packet using the Packet Struct": [[1, "encoding-a-packet-using-the-packet-struct"]], "Encoding a Packet with Float Data": [[1, "encoding-a-packet-with-float-data"]], "Encoding a Packet with a List of Floats Data": [[1, "encoding-a-packet-with-a-list-of-floats-data"]], "BPL Protocol - C/C++ SDK": [[2, "bpl-protocol-c-c-sdk"]], "Enable use of the SDK": [[2, "enable-use-of-the-sdk"], [11, "enable-use-of-the-sdk"]], "SDK": [[2, "sdk"], [11, "sdk"], [11, "id1"]], "Examples": [[2, "examples"], [11, "examples"], [17, "examples"], [19, "examples"], [19, "id1"], [19, "id9"]], "Running Examples": [[2, "running-examples"]], "Accessing the Force Torque Sensor": [[3, "accessing-the-force-torque-sensor"]], "Controlling Joints": [[4, "controlling-joints"]], "Master Arm Information": [[5, "master-arm-information"]], "Master Arm Passthrough": [[6, "master-arm-passthrough"]], "Requesting Joint Positions": [[7, "requesting-joint-positions"]], "Setting Heartbeats": [[8, "setting-heartbeats"]], "Controlling Joints Simultaneously": [[9, "controlling-joints-simultaneously"]], "Voltage Threshold Parameters - Auto Stow on Voltage Change": [[10, "voltage-threshold-parameters-auto-stow-on-voltage-change"]], "Usage": [[10, "usage"], [11, "usage"], [17, "usage"], [19, "usage"]], "Example": [[10, "example"]], "BPL Protocol": [[11, "bpl-protocol"]], "Python Installation": [[11, "python-installation"]], "Access to the SDK": [[13, "access-to-the-sdk"]], "Reach Robotics SDK": [[15, "reach-robotics-sdk"]], "Programming Interfaces": [[15, "programming-interfaces"]], "ROS and ROS 2 Support": [[15, "ros-and-ros-2-support"]], "Download": [[15, "download"]], "Contents": [[15, null]], "Using bpl_passthrough to get joint positions": [[16, "using-bpl-passthrough-to-get-joint-positions"], [18, "using-bpl-passthrough-to-get-joint-positions"]], "ROS": [[17, "ros"]], "Installation": [[17, "installation"], [19, "installation"]], "bpl_passthrough": [[17, "bpl-passthrough"], [19, "bpl-passthrough"]], "Published Topics": [[17, "published-topics"], [19, "published-topics"], [19, "id2"], [19, "id4"], [19, "id7"]], "Subscribed Topics": [[17, "subscribed-topics"], [19, "subscribed-topics"], [19, "id3"], [19, "id5"], [19, "id8"]], "Parameters - udp_passthrough.py": [[17, "parameters-udp-passthrough-py"]], "Parameters - serial_passthrough.py": [[17, "parameters-serial-passthrough-py"]], "bpl_alpha_description": [[17, "bpl-alpha-description"]], "bpl_bravo_description": [[17, "bpl-bravo-description"], [19, "bpl-bravo-description"]], "bpl_bravo_description_mk2": [[17, "bpl-bravo-description-mk2"]], "ROS2": [[19, "ros2"]], "Parameters - udp_passthrough": [[19, "parameters-udp-passthrough"]], "Parameters - serial_passthrough": [[19, "parameters-serial-passthrough"]], "bpl_control": [[19, "bpl-control"]], "joint_state_publisher": [[19, "joint-state-publisher"]], "Parameters": [[19, "parameters"], [19, "id6"]], "end_effector_pose_publisher": [[19, "end-effector-pose-publisher"]], "control_node": [[19, "control-node"]], "bpl_bringup": [[19, "bpl-bringup"]], "Bravo 5 Example": [[19, "bravo-5-example"]], "Bravo 7 Example": [[19, "bravo-7-example"]], "Bravo 7 and Bravo 5 Example": [[19, "bravo-7-and-bravo-5-example"]], "Documentation": [[14, "documentation"]], "Reach Alpha": [[14, "reach-alpha"]], "Reach Bravo": [[14, "reach-bravo"]], "Master Arm": [[14, "master-arm"]], "Reach System Communication Protocol": [[14, "reach-system-communication-protocol"]], "BPL Protocol SDK": [[12, "module-bplprotocol"]]}, "indexentries": {"bplprotocol (class in bplprotocol)": [[12, "bplprotocol.BPLProtocol"]], "packetreader (class in bplprotocol)": [[12, "bplprotocol.PacketReader"]], "bplprotocol": [[12, "module-bplprotocol"]], "decode_floats() (bplprotocol.bplprotocol static method)": [[12, "bplprotocol.BPLProtocol.decode_floats"]], "encode_floats() (bplprotocol.bplprotocol static method)": [[12, "bplprotocol.BPLProtocol.encode_floats"]], "encode_packet() (bplprotocol.bplprotocol static method)": [[12, "bplprotocol.BPLProtocol.encode_packet"]], "module": [[12, "module-bplprotocol"]], "packet_splitter() (bplprotocol.bplprotocol static method)": [[12, "bplprotocol.BPLProtocol.packet_splitter"]], "parse_packet() (bplprotocol.bplprotocol static method)": [[12, "bplprotocol.BPLProtocol.parse_packet"]], "receive_bytes() (bplprotocol.packetreader method)": [[12, "bplprotocol.PacketReader.receive_bytes"]]}})