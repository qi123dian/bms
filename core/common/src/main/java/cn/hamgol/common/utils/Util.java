package cn.hamgol.common.utils;

import java.util.UUID;

public class Util {
	
	
	public static String getUId() {
		return UUID.randomUUID().toString().replace("-", "").toUpperCase();
	}
}
